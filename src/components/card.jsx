const Card = () => {
    return (
        <div className="bg-white p-5 mt-4 flex-col rounded-lg shadow-lg shadow-slate-600">
            <div className="text-center">
                <span className="block text-slate-700 font-bold text-2xl">Campo Grande</span>
                <span className="text-slate-400 font-bold text-sm">Mato Grosso Do Sul, Brasil</span>
            </div>
            <div className="font-bold text-slate-800 flex justify-center mt-4">
                <span className="text-7xl">29</span>
                <span className="text-2xl mt-2">ºC</span>
            </div>
            <div className="text-center mt-5">
                <span className="block">Icone</span>
                <span className="text-lg font-bold text-slate-600">Nublado</span>
            </div>
        </div>
    )
}

export default Card