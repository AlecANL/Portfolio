import {SearchStyled} from "@molecules/search/search.styled";

export function Search() {
    return (
        <>
            <SearchStyled>
                <input placeholder='test' name='test' type="text"/>
                <select name="" id="">
                    <option value="">00</option>
                    <option value="1">3</option>
                    <option value="2">2</option>
                    <option value="3">1</option>
                </select>

            </SearchStyled>
        </>
    )
}
