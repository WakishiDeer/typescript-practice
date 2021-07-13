type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter<number | string> = (array, f) => {
    let result = []
    for (let i = 0; i < array.length; i++){
        let item = array[i]
        if(f(item)){
            result.push(item)
        }
    }
    return result
}

console.log(filter([1, 2, 3, 4], _ => _ < 3))
console.log(filter(['a', 'b', 'c'], _ => _ !=='b'))
