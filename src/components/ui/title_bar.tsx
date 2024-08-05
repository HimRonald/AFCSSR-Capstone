export default function TitleBar({title_bar = ''}){
    return(
        <>
        <div className="w-full h-32 bg-[#027AC6] justify-center flex flex-col items-center">
            <span className="text-[40px] text-white font-libre font-semibold">{title_bar}</span>
        </div>
        </>
    )
}