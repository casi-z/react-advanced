import styled from "styled-components";

function useHeaderStyles(theme: any) {

    return styled.header`
        .Header{
            &__account-button{
                color: ${theme.palette.text.primary};
                border-left: 1px solid #eaeaea;
            }
        }
    `

}

export default useHeaderStyles