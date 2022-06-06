import { useState } from 'react';
import Card from './card'
import fetchData from './services/api'
import initialData from './helpers/initialData' 

const Form = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState(initialData)

    const handleSubmit = (event) =>{
        event.preventDefault()
        fetchData(city).then((reponse) =>{
            setData(reponse)
        })
    }

    return (
        <div className="flex items-center justify-center h-screen w-full flex-col">
            <form onSubmit={ handleSubmit }>
                <input 
                type="text"
                placeholder="Cidade"
                className="p-2 rounded-lg outline-none"
                value={city}
                onChange={(event)=> setCity(event.target.value)}
                />
                <input 
                type="submit" 
                value="Pesqusiar"
                className="p-2 bg-blue-600 rounded-lg ml-3 text-slate-100 hover:bg-blue-800 ease-out duration-150 cursor-pointer"
                />
            </form>
            <Card data={data}/>
        </div>
    )
}

export default Form