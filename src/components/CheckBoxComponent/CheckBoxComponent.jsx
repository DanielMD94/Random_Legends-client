import { useEffect, useState } from "react"
import IndexAxios from "../../services/indexAxios"
import './CheckBoxComponent.css'



const CheckBoxComponent = ({ ListQueries }) => {

    const indexAxios = new IndexAxios()
    const { setQueries, setAllChampions, searchCheckBox } = ListQueries
    const [champs, setChamps] = useState(null)
    const [tags, setTags] = useState({ Mage: false, Fighter: false });
    const [selected, setSelected] = useState({
        Fighter: false,
        Mage: false,
        Assassin: false,
        Support: false,
        Marksman: false,
        Tank: false

    })

    const searchChamps = (e) => {
        setSelected({ ...selected, [e.target.value]: e.target.checked })
        setQueries(selected)
        searchCheckBox({ ...selected, [e.target.value]: e.target.checked })
    }


    return (
        <div className="checkBox-container">
            <label className="containers">
                <input type="checkbox" id="cbox1" onChange={searchChamps} value="Fighter" />
                <span className="checkmark"></span>
                <img className="checkBox-logo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664804323/Fighter_obixnf.png" alt="Fighter" />
            </label>
            <label className="containers">
                <input type="checkbox" id="cbox1" onChange={searchChamps} value="Mage" />
                <span className="checkmark"></span>
                <img className="checkBox-logo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664804323/Mage_x09cme.png" alt="Mage" />
            </label>
            <label className="containers">
                <input type="checkbox" id="cbox1" onChange={searchChamps} value="Assassin" />
                <span className="checkmark"></span>
                <img className="checkBox-logo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664804323/Assassin_dgr4as.png" alt="Assassin" />
            </label>
            <label className="containers">
                <input type="checkbox" id="cbox1" onChange={searchChamps} value="Support" />
                <span className="checkmark"></span>
                <img className="checkBox-logo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664804324/Support_xnjip5.png" alt="Support" />
            </label>
            <label className="containers">
                <input type="checkbox" id="cbox1" onChange={searchChamps} value="Marksman" />
                <span className="checkmark"></span>
                <img className="checkBox-logo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664804324/Marksman_l15dga.png" alt="Marksman" />
            </label>
            <label className="containers">
                <input type="checkbox" id="cbox1" onChange={searchChamps} value="Tank" />
                <span className="checkmark"></span>
                <img className="checkBox-logo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664804324/Tank_zgfqgu.png" alt="Tank" />
            </label>
        </div>
    )

}

export default CheckBoxComponent