import React, { MouseEventHandler } from 'react'
import Button from '@material-ui/core/Button'
import ScrollableElement from '../ScrollableElement'
// @ts-ignore
import styles from './EmoteMenu.module.scss'
import { ClientInputSchema } from '@xrengine/engine/src/input/schema/ClientInputSchema'
import { Engine } from '@xrengine/engine/src/ecs/classes/Engine'
import { getMutableComponent, hasComponent } from '@xrengine/engine/src/ecs/functions/EntityFunctions'
import { LocalInputReceiver } from '@xrengine/engine/src/input/components/LocalInputReceiver'
import { AnimationComponent } from '@xrengine/engine/src/character/components/AnimationComponent'
import {
  CalculateWeightsParams,
  CharacterAnimations,
  CharacterStates
} from '@xrengine/engine/src/character/animations/Util'

type MenuItemType = {
  body: any
  containerProps: {
    onClick: MouseEventHandler<HTMLButtonElement>
  }
}

type EmoteMenuPropsType = {
  // items: MenuItemType[];
}

const EmoteMenuCore = (props: EmoteMenuPropsType) => {
  const items: MenuItemType[] = [
    {
      body: <img src="/static/Dance1.svg" alt="Dance 1" />,
      containerProps: {
        onClick: () => runAnimation(CharacterStates.LOOPABLE_EMOTE, { animationName: CharacterAnimations.DANCING_1 })
      }
    },
    {
      body: <img src="/static/Dance2.svg" alt="Dance 2" />,
      containerProps: {
        onClick: () => runAnimation(CharacterStates.LOOPABLE_EMOTE, { animationName: CharacterAnimations.DANCING_2 })
      }
    },
    {
      body: <img src="/static/Dance3.svg" alt="Dance 3" />,
      containerProps: {
        onClick: () => runAnimation(CharacterStates.LOOPABLE_EMOTE, { animationName: CharacterAnimations.DANCING_3 })
      }
    },
    {
      body: <img src="/static/Dance4.svg" alt="Dance 4" />,
      containerProps: {
        onClick: () => runAnimation(CharacterStates.LOOPABLE_EMOTE, { animationName: CharacterAnimations.DANCING_4 })
      }
    }
  ]

  const runAnimation = (animationName: string, params: CalculateWeightsParams) => {
    const entity = Engine.entities.find((e) => e.name === 'Player' && hasComponent(e, LocalInputReceiver))
    const animationComponent = getMutableComponent(entity, AnimationComponent)

    const animationState = animationComponent.animationGraph.states[animationName]

    params.smoothChange = true
    if (animationComponent.currentState.name === animationState.name) {
      params.resetAnimation = true
      params.recalculateWeights = true
      animationComponent.currentState.changeAnimationSmoothly(params)
      animationComponent.animationGraph.updateNetwork(animationComponent, animationState.name, params)
    } else {
      animationComponent.animationGraph.transitionState(animationComponent, animationState.name, params)
      if (animationComponent.currentState.changeAnimationSmoothly) {
        animationComponent.currentState.changeAnimationSmoothly(params)
      }
    }
  }

  const jumpStart = () => {
    const keydownEvent = ClientInputSchema.eventBindings.keydown[0]

    keydownEvent.behavior({
      value: keydownEvent.args.value,
      event: {
        key: ' '
      } as KeyboardEvent
    })
  }

  const jumpStop = () => {
    const keyUpEvent = ClientInputSchema.eventBindings.keyup[0]

    keyUpEvent.behavior({
      value: keyUpEvent.args.value,
      event: {
        key: ' '
      } as KeyboardEvent
    })
  }

  return (
    <section className={styles.emoteMenu}>
      <ScrollableElement height={400}>
        {items.map((item, index) => {
          return (
            <Button className={styles.menuItem} key={index} {...item.containerProps}>
              {item.body}
            </Button>
          )
        })}
      </ScrollableElement>
      {/* <div className={styles.jumpContainer}>
                <Button
                    className={styles.menuItem}
                    onMouseDown={jumpStart}
                    onMouseUp={jumpStop}
                >
                    <img src="/static/Jump.svg" alt="Jump" />
                </Button>
            </div> */}
    </section>
  )
}

export default EmoteMenuCore
