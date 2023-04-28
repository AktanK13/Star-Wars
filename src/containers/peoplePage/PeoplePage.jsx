import { useState, useEffect } from 'react'
import styles from './PeoplePage.module.css'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../const/api'
import {getPeopleData, getPeopleImage} from "../../utils/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";


const PeoplePage = () => {
    const [people, setPeople] = useState(null)

    const getResource = async (url) => {
        const body = await getApiResource(url)
        const productList = body.results.map(({name, url}) => {
            const id = getPeopleData(url)
            const img = getPeopleImage(id)
            return {
                id,
                name,
                img,
                url
            }
        })
        setPeople(productList)
    }
    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            { people && <PeopleList people={people}/>}
        </>
    )
};

export default PeoplePage