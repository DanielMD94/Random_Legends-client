import { useEffect, useState } from "react"
import IndexAxios from "../../services/indexAxios"



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

    // useEffect(() => {
    //     indexAxios.getFindChamps(selected)
    //         .then((champions) => {
    //             console.log('campeones filtrados', champions)
    //         })
    //         .catch(err => console.log(err))

    // }, [selected])


    // console.log('esto es el checkBox ', copyChamps)
    const searchChamps = (e) => {
        setSelected({ ...selected, [e.target.value]: e.target.checked })
        setQueries(selected)
        searchCheckBox({ ...selected, [e.target.value]: e.target.checked })
        console.log({ ...selected, [e.target.value]: e.target.checked })
        // indexAxios.getFindChamps(selected)
        //     .then((champions) => {
        //         console.log('campeones filtrados', champions)
        //     })
        //     .catch(err => console.log(err))

    }


    return (
        <>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchChamps} value="Fighter" /> Fighter</label>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchChamps} value="Mage" /> Mage</label>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchChamps} value="Assassin" /> Assassin</label>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchChamps} value="Support" /> Support</label>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchChamps} value="Marksman" /> Marksman</label>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchChamps} value="Tank" /> Tank</label>
        </>
    )

}

export default CheckBoxComponent




// let query = e.target.value
// const _tags = { ...tags };
// _tags[e.target.value] = e.target.checked;
// // console.log('esto es la value!!!', query)
// let fighters = []
// // champs.forEach(champ => {
// //     console.log(champ.tags)
// // });
// if (Object.values(_tags).some(tag => tag)) {
//     const trueValues = Object.entries(_tags).reduce((tags, tagState) => { // [[Mage, true], [Fighter, true]]
//         if (tagState[1]) {
//             tags.push(tagState[0])
//         }
//         return tags;
//     }, [])
//     let findChamps = champs.filter((champ) => {
//         return champ.tags.some(tag => {
//             return trueValues.includes(tag)
//         });
//     });

//     copyChamps.forEach(copyChamp => {
//         findChamps.forEach((champFind, f) => {
//             if (copyChamp.name.includes(findChamps[f].id)) {
//                 return fighters.push(copyChamp)
//             }
//         })
//     });
// } else {
//     fighters = copyChamps;
// }
// console.log(findChamps)
// console.log('luchadores', fighters)
// setAllChampions(fighters)