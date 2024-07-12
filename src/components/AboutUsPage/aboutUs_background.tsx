export default function AboutUsBackground(){
    return(
        <div className="my-10 mx-auto container">
            <div className="grid justify-center lg:grid-cols-2 gap-5">
                <div>
                    <img src="/Images/backgroundAlumni.png" alt="" className="object-cover rounded-xl" />
                </div>
                <div className="flex flex-col justify-center gap-6 mt-5 lg:mt-0 text-[#4F4A5C]">
                    <h2 className="text-2xl md:text-4xl font-libre font-bold">Association Background</h2>
                    <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                
            </div>
        </div>
    )
}