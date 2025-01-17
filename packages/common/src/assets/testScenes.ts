import { MathUtils } from 'three'
import { testScenePreset } from './testScenePreset'
const { generateUUID } = MathUtils

export const testUserId = generateUUID()

export const testScenes = {
  test: testScenePreset
}

export const testWorldState = {
  tick: 100,
  transforms: [],
  ikTransforms: [],
  time: 0,
  inputs: [],
  clientsConnected: [
    {
      userId: testUserId,
      name: testUserId,
      avatarDetail: {
        avatarId: 'Sonny',
        avatarURL: '/models/avatars/Sonny.glb',
        thumbnailURL: '/static/Sonny.jpg'
      }
    }
  ],
  clientsDisconnected: [],
  createObjects: [
    {
      networkId: 1,
      prefabType: 0,
      parameters: {
        position: {
          x: -1.3892272216183488,
          y: 9.3510433175368,
          z: 15.06581360099715
        },
        rotation: {
          x: 3.313870358775352e-17,
          y: -0.9238795325112867,
          z: 3.313870358775352e-17,
          w: 0.3826834323650898
        }
      },
      ownerId: testUserId,
      uniqueId: testUserId
    }
  ],
  editObjects: [],
  destroyObjects: []
}
