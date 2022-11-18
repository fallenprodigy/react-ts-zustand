import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  padding: 1rem 5rem;
`;

export const Text = styled.h1`
  width: 100%;
  text-align: center;
  padding: 1rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
