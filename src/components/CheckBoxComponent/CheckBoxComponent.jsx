import { useEffect, useState } from "react"
import IndexAxios from "../../services/indexAxios"



const CheckBoxComponent = ({ championsAndSet }) => {
    const indexAxios = new IndexAxios()

    const [champs, setChamps] = useState(null)
    const [tags, setTags] = useState({ Mage: false, Fighter: false });


    useEffect(() => {
        indexAxios.getAllChamps()
            .then((champions) => {

                setChamps(champions)
            })
            .catch(err => console.log(err))

    }, [])

    const { copyChamps, setAllChampions } = championsAndSet
    // console.log('esto es el checkBox ', copyChamps)
    const searchProduct = (e) => {
        let query = e.target.value
        const _tags = { ...tags };
        _tags[e.target.value] = e.target.checked;
        // console.log('esto es la value!!!', query)
        let fighters = []
        // champs.forEach(champ => {
        //     console.log(champ.tags)
        // });
        if (Object.values(_tags).some(tag => tag)) {
            const trueValues = Object.entries(_tags).reduce((tags, tagState) => { // [[Mage, true], [Fighter, true]]
                if (tagState[1]) {
                    tags.push(tagState[0])
                }
                return tags;
            }, [])
            let findChamps = champs.filter((champ) => {
                return champ.tags.some(tag => {
                    return trueValues.includes(tag)
                });
            });

            copyChamps.forEach(copyChamp => {
                findChamps.forEach((champFind, f) => {
                    if (copyChamp.name.includes(findChamps[f].id)) {
                        return fighters.push(copyChamp)
                    }
                })
            });
        } else {
            fighters = copyChamps;
        }
        // console.log(findChamps)
        // console.log('luchadores', fighters)
        setAllChampions(fighters)
    }

    return (
        <>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchProduct} value="Fighter" /> Fighter</label>
            <label className="text-light"><input type="checkbox" id="cbox1" onChange={searchProduct} value="Mage" /> Mage</label>
        </>
    )

}

export default CheckBoxComponent