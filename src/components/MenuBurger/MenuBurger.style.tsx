import styled from "styled-components"

function useMenuBurgerStyles(theme: any) {



    return styled.div`
      .MuiDrawer-paper {
        background: ${theme.palette.secondary.light};
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding-bottom: 5%;
      }

      .menu-burger__items {
        width: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0;

      }

      .MuiDrawer-root {
        display: none;
        pointer-events: none;
      }


    `
}
export default useMenuBurgerStyles