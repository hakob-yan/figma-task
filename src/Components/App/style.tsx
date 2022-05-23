import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Page = styled.div`
  overflow: auto;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 18px;
  }
  ::-webkit-scrollbar-track {
    background: #e1aa98;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
