
const SearchByText = ({ placeholderText, icon, gap }) => {
    return (
        <div className="w-42 sm:w-42 mt-4 sm:mt-0 relative">
            {icon}
            <form>
                <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    className={`${gap} py-2 pr-2 text-gray-200 placeholder-zinc-500 font-bold block focus:outline-none w-full rounded-md bg-gray-900`}
                    placeholder={placeholderText}
                />
            </form>
        </div>
    )
}

export default SearchByText