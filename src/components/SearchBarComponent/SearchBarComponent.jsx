const SearchBarComponent = ({ championsAndSet }) => {
    const { copyChamps, setAllChampions } = championsAndSet

    const searchProduct = (e) => {
        let query = e.target.value
        let findChamp = copyChamps.filter((el) => {
            return el.name.toLowerCase().startsWith(query.toLowerCase())
        })
        setAllChampions(findChamp)
    }
    return (
        <input onChange={searchProduct} type="text" />
    )
}

export default SearchBarComponent
