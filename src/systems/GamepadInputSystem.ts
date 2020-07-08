import { System } from "ecsy"
import GamepadInput from "../components/GamepadInput"
import InputAxisHandler2D from "../components/InputAxisHandler2D"
import UserInput from "../components/UserInput"
import InputActionHandler from "../components/InputActionHandler"
import Switch from "../enums/Switch"

export default class GamepadInputSystem extends System {
  public execute(): void {
    this.queries.gamepad.added.forEach(ent => {
      const gamepadInput = ent.getMutableComponent(GamepadInput)
      window.addEventListener("gamepadconnected", (event: any) => {
        console.log("A gamepad connected:", event.gamepad, event.gamepad.mapping)
        if (event.gamepad.mapping !== "standard") {
          return
        }
        gamepadInput.connected = true

        const gamepad = event.gamepad
        for (let index = 0; index < gamepad.buttons.length; index++) {
          if (typeof gamepadInput.buttons[index] === "undefined") {
            gamepadInput.buttons[index] = false
          }
        }
      })
      window.addEventListener("gamepaddisconnected", (event: any) => {
        console.log("A gamepad disconnected:", event.gamepad)
        gamepadInput.connected = false
        // trigger buttons release
        const actionHandler = ent.getMutableComponent(InputActionHandler)
        const inputMap = ent.getComponent(UserInput).inputMap.gamepad
        if (!inputMap) {
          return
        }
        for (let index = 0; index < gamepadInput.buttons.length; index++) {
          if (gamepadInput.buttons[index] === true && typeof inputMap.actions[index] !== "undefined") {
            actionHandler.values.add({
              action: inputMap.actions[index],
              value: Switch.OFF
            })
          }
          gamepadInput.buttons[index] = false
        }
      })
    })
    this.queries.gamepad.results.forEach(entity => {
      const gamepadInput = entity.getMutableComponent(GamepadInput)
      if (gamepadInput.connected) {
        const inputMap = entity.getComponent(UserInput).inputMap.gamepad
        if (!inputMap) {
          // no need to process if gamepad is not mapped
          return
        }

        const gamepads = navigator.getGamepads()
        const queue = entity.getComponent(InputAxisHandler2D).values

        const axisPerGamepad = 2

        for (let index = 0; index < gamepads.length; index++) {
          const gamepad = gamepads[index]
          if (!gamepad) {
            return
          }
          const axis0 = axisPerGamepad * index
          const axis1 = axisPerGamepad * index + 1

          if (gamepad.axes) {
            if (inputMap.axes[axis0] && gamepad.axes.length >= 2) {
              // GamePad 0 LStick XY
              queue.add({
                axis: inputMap.axes[axis0],
                value: {
                  x: gamepad.axes[0],
                  y: gamepad.axes[1]
                }
              })
            }

            if (inputMap.axes[axis1] && gamepad.axes.length >= 4) {
              // GamePad 1 LStick XY
              queue.add({
                axis: inputMap.axes[axis1],
                value: {
                  x: gamepads[0].axes[2],
                  y: gamepads[0].axes[3]
                }
              })
            }
          }

          if (gamepad.buttons && inputMap.actions) {
            const actionHandler = entity.getMutableComponent(InputActionHandler)

            for (let index = 0; index < gamepad.buttons.length; index++) {
              if (typeof inputMap.actions[index] === "undefined") {
                continue
              }
              if (gamepad.buttons[index].touched !== gamepadInput.buttons[index]) {
                actionHandler.values.add({
                  action: inputMap.actions[index],
                  value: gamepad.buttons[index].touched ? Switch.ON : Switch.OFF
                })
                gamepadInput.buttons[index] = gamepad.buttons[index].touched
              }
            }
          }
        }

        // if (gamepads[i].axes && gamepads[i].axes.length >= 2) {
        //   // X Axis
        //   if (gamepads[i].axes[0] < -gp.threshold || gamepads[i].axes[0] > gp.threshold) {
        //     if (i == 0) gp.dpadOneAxisX = gamepads[i].axes[0]
        //     else if (i == 1) gp.dpadTwoAxisX = gamepads[i].axes[0]
        //   }
        //   if (gamepads[i].axes[1] < -gp.threshold || gamepads[i].axes[1] > gp.threshold) {
        //     if (i == 0) gp.dpadOneAxisY = gamepads[i].axes[1]
        //     else if (i == 1) gp.dpadTwoAxisY = gamepads[i].axes[1]
        //   }
        // }
      }
    })
  }
}
GamepadInputSystem.queries = {
  gamepad: {
    components: [GamepadInput],
    listen: {
      added: true,
      removed: true
    }
  }
}
