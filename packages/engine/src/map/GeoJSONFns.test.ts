import { subtract, copy, computeBoundingBox, unifyFeatures } from './GeoJSONFns'
import polygonClipping from 'polygon-clipping'
import { Feature, Geometry, Polygon, Position } from 'geojson'
const boxCoords = [
  [-1, -1],
  [1, -1],
  [1, 1],
  [-1, 1],
  [-1, -1]
]
function scalePolygon(coords: Position[], xFactor: number, zFactor: number): Position[] {
  return coords.map(([x, z]) => [x * xFactor, z * zFactor])
}
function translatePolygon(coords: Position[], xDiff: number, zDiff: number): Position[] {
  return coords.map(([x, z]) => [x + xDiff, z + zDiff])
}
const polygonSmall: Geometry = {
  type: 'Polygon',
  coordinates: [boxCoords]
}
const multiPolygonSmall: Geometry = {
  type: 'MultiPolygon',
  coordinates: [[boxCoords], [translatePolygon(boxCoords, 2, 2)]]
}
const polygonBig: Geometry = {
  type: 'Polygon',
  coordinates: [scalePolygon(boxCoords, 5, 5)]
}
describe('subtract', () => {
  it('subtracts a small polygon from a big one', () => {
    const result = subtract(copy(polygonBig), [polygonSmall])

    expect(result.coordinates[0]).toEqual(polygonBig.coordinates[0])
    expect(result.coordinates[1]).toEqual(polygonSmall.coordinates[0].reverse())
  })
  it('subtracts a small multi-polygon from a big one', () => {
    const result = subtract(copy(polygonBig), [multiPolygonSmall])

    expect(result.coordinates[0]).toEqual(polygonBig.coordinates[0])
    expect(result.coordinates[1]).toEqual(multiPolygonSmall.coordinates[0][0].reverse())
    expect(result.coordinates[2]).toEqual(multiPolygonSmall.coordinates[1][0].reverse())
  })
})

describe('computeBoundingBox', () => {
  it('computes the bounding box (2D) of a set of polygons', () => {
    const polygons: Polygon[] = polygonBig.coordinates[0].map((offsetCoords) => ({
      type: 'Polygon',
      coordinates: [
        polygonSmall.coordinates[0].map((boxCoords) => {
          return [boxCoords[0] + offsetCoords[0], boxCoords[1] + offsetCoords[1]]
        })
      ]
    }))

    expect(computeBoundingBox(polygons)).toEqual({
      type: 'Polygon',
      coordinates: [
        [
          [-6, -6],
          [6, -6],
          [6, 6],
          [-6, 6],
          [-6, -6]
        ]
      ]
    })
  })
})

describe('unifyFeatures', () => {
  // Useful for when a feature is split across multiple vector tiles
  it('unifies polygons belonging to the same feature', () => {
    const input: Feature[] = [
      {
        type: 'Feature',
        id: 1,
        geometry: {
          type: 'Polygon',
          coordinates: [scalePolygon(boxCoords, 5, 5)]
        },
        properties: {}
      },
      {
        type: 'Feature',
        id: 1,
        geometry: {
          type: 'Polygon',
          coordinates: [translatePolygon(scalePolygon(boxCoords, 5, 5), 5, 0)]
        },
        properties: {}
      },
      {
        type: 'Feature',
        id: 1,
        geometry: {
          type: 'Polygon',
          coordinates: [translatePolygon(scalePolygon(boxCoords, 5, 5), 10, 0)]
        },
        properties: {}
      },
      {
        type: 'Feature',
        id: 2,
        geometry: {
          type: 'Polygon',
          coordinates: [translatePolygon(scalePolygon(boxCoords, 5, 5), -5, 0)]
        },
        properties: {}
      }
    ]

    const output = unifyFeatures(input)

    expect((output[0].geometry as Polygon).coordinates).toEqual(
      polygonClipping.union(
        (input[0].geometry as Polygon).coordinates as any,
        polygonClipping.union(
          (input[1].geometry as Polygon).coordinates as any,
          (input[2].geometry as Polygon).coordinates as any
        )[0]
      )[0]
    )

    expect(output[1].geometry).toBe(input[3].geometry)
  })

  // it('merges properties intelligently')

  // it('handles multipolygons')
})
