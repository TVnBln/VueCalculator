export const STORAGE_KEY = 'calculations-vuejs';

// for testing
if(navigator.webdriver){
    window.localStorage.clear()
}

export const mutations = {
    addNumberModifier(state, x) {
        if(state.calculation === '0') {
            state.calculation = x
            state.display = x
        } else {
            state.calculation += x
            state.display += x
        }

    },
    addOperation(state, operation) {
        state.calculation += operation
        switch (operation){
            case '+':
                state.display += '+'
                break
            case '-':
                state.display += '-'
                break
            case '/':
                state.display += '÷'
                break
            case '*':
                state.display += '×'
        }
    },
    clear(state) {
        state.calculation = ''
        state.output = ''
        state.display = ''
    },
    calculate(state) {
        if(state.calculation === ''){
            return
        }
        const calc = eval(state.calculation)
        state.calculations.push({calculation: state.display, output: calc})
        state.output = calc
        state.calculation = calc
        state.display = calc

    },
    changeExtra(state) {
        state.extra = !state.extra
    },
    addDecimal(state) {
        state.calculation += '.'
    },
    backspace(state) {
        if(state.display.endsWith('sin(') || state.display.endsWith('sin()')){
            const displaysStr = state.display.slice(-4, 0)
            const calcStr = state.calculation.slice(-10, 0)
            state.display = displaysStr
            state.calculation = calcStr
        } else if(state.display.endsWith('cos(') || state.display.endsWith('sin()')) {
            const displaysStr = state.display.slice(-4, 0)
            const calcStr = state.calculation.slice(-10, 0)
            state.display = displaysStr
            state.calculation = calcStr
        } else if(state.display.endsWith('tan(') || state.display.endsWith('tan()')) {
            const displaysStr = state.display.slice(-4, 0)
            const calcStr = state.calculation.slice(-10, 0)
            state.display = displaysStr
            state.calculation = calcStr
        } else if(state.display.endsWith('ln(') || state.display.endsWith('ln()')) {
            const displaysStr = state.display.slice(-3, 0)
            const calcStr = state.calculation.slice(-10, 0)
            state.display = displaysStr
            state.calculation = calcStr
        } else if(state.display.endsWith('√(') || state.display.endsWith('√()')) {
            const displaysStr = state.display.slice(-8, 0)
            const calcStr = state.calculation.slice(-11, 0)
            state.display = displaysStr
            state.calculation = calcStr
        } else if(state.display.endsWith('log(') || state.display.endsWith('log()')) {
            const displaysStr = state.display.slice(-4, 0)
            const calcStr = state.calculation.slice(-11, 0)
            state.display = displaysStr
            state.calculation = calcStr
        } else {
            const displayStr = state.display.slice(0, -1)
            const calcStr = state.calculation.slice(0, -1)
            state.calculation = displayStr
            state.display = calcStr
        }
    },
    bracket(state){


        state.display += ')'
        state.calculation += ')'
    },
    addPercent(state) {
        const output = state.calculation / 100
        state.calculation = output
        state.output = output
    },
    addPlusMinus(state) {
        if(state.calculation === '-0') {
            state.calculation = '0'
        }
        if(parseFloat(state.calculation) >= 0) {
            state.calculation = '-' + state.calculation
        } else {
            state.calculation = state.calculation.substring(1)
        }
    },
    showHistory(state) {
        state.showHistory = !state.showHistory
    },
    clearHistory(state){
        state.calculations = []
    },
    goBack(state) {
        state.calculator = true
    },
    unitConverter(state) {
        state.calculator = false
        state.scientific = false
    },
    scientific(state) {
        state.scientific = !state.scientific
    },
    // route(state, name) {
    //     state.links.find(el => el.active === true).active = false
    //     state.links.find(el => el.name === name).active = true
    // }
    addMath(state, type){
        switch (type) {
            case 'sin':
                state.display += 'sin('
                state.calculation += 'Math.sin('
                break
            case 'cos':
                state.display += 'cos('
                state.calculation += 'Math.cos('
                break
            case 'tan':
                state.display += 'tan('
                state.calculation += 'Math.tan('
                break
            case 'ln':
                state.display += 'ln('
                state.calculation += 'Math.log('
                break
            case 'sqrt':
                state.display += '√('
                state.calculation += 'Math.sqrt('
                break
            case 'log':
                state.display += 'log('
                state.calculation += 'Math.log2('
                break
            default:
                break;
        }
    }
}
