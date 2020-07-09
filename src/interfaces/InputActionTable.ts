import ActionRules from "./ActionRules"
import ActionType from "../types/ActionType"
import AxisType from "../types/AxisType"

const symbol: unique symbol = Symbol()

interface InputActionTable {
  rules: {
    [symbol]?: ActionRules
  }
  mouse?: {
    actions?: {
      [key: string]: ActionType
      [key: number]: ActionType
    }
    axes?: {
      [key: string]: AxisType
      [key: number]: AxisType
    }
  }
  keyboard?: {
    actions?: {
      [key: string]: ActionType
      [key: number]: ActionType
    }
    axes?: {
      [key: string]: AxisType
      [key: number]: AxisType
    }
  }
  gamepad?: {
    actions?: {
      [key: number]: ActionType
      [key: string]: ActionType
    }
    axes?: {
      [key: number]: AxisType
      [key: string]: AxisType
    }
  }
}

export default InputActionTable
