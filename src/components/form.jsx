import Card from './card'

const Form = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full flex-col">
            <form className="">
                <input 
                type="text"
                placeholder="Cidade"
                className="p-2 rounded-lg outline-none"
                />
                <input 
                type="submit" 
                value="Pesqusiar"
                className="p-2 bg-blue-600 rounded-lg ml-3 text-slate-100 hover:bg-blue-800 ease-out duration-150 cursor-pointer"
                />
            </form>
            <Card/>
        </div>
    )
}

export default Form