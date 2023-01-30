import { input } from "@material-tailwind/react"

const SearchByText = ({ placeholderText, icon, gap, onChange, value, name }) => {
    return (
        <div className="w-48 sm:w-48 mt-4 sm:mt-0 relative">
            {icon}
            <form>
                <input
                    // value={value}
                    // onKeyUp={value.toLocaleUpperCase}
                    onChange={onChange}
                    type="text"
                    name={name}
                    value={value}
                    // id="company_website"
                    style={{ textTransform: "uppercase" }}
                    className={`${gap} py-2 pr-2 text-gray-200 placeholder-zinc-800 font-bold block focus:outline-none w-full rounded-md bg-gray-900`}
                    placeholder={placeholderText}
                />
            </form>
        </div>
    )
}

export default SearchByText