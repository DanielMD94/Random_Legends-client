import SearchIcon from '@mui/icons-material/Search';
import './SearchBarComponent.css'

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
        <div className="boxSearch">
            <input className="inputSearch" onChange={searchProduct} type="text" />
            <i><SearchIcon /></i>
        </div>
    )
}

export default SearchBarComponent
