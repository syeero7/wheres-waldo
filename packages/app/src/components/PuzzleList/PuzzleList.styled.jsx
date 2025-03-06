import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1em;

  @media screen and (min-width: 59em) {
    margin: 0.5em 1em;
  }
`;

export const List = styled.ul`
  --min-col-size: 450px;

  display: grid;
  justify-items: center;
  gap: 1em;
  padding: 0.5em;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--min-col-size), 100%), 1fr)
  );
`;

export const ListItem = styled.li`
  & {
    margin: 0.2em;
    padding: 0.5em 0.25em;
    border: 1px solid hsla(from var(--black-olive) h s l / 0.3);
    box-shadow: hsla(from var(--black-olive) h s l / 0.4) 5px 5px 6px;
  }

  &:has(> a:hover),
  &:has(> a:active),
  &:has(> a:focus-visible) {
    border-radius: var(--radius);
    background-color: var(--black-olive);
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: var(--radius);
  transition: transform 0.2s;

  &:hover,
  &:active,
  &:focus-visible {
    outline: none;
    transform: scale(0.97);
    background-color: var(--snow);
  }
`;

export const Image = styled.img`
  min-width: 280px;
  max-width: 100%;
  height: auto;
  border-radius: var(--radius) var(--radius) 0 0;
`;

export const Characters = styled.div`
  display: flex;
  max-width: fit-content;
  padding: 0.5em;
  gap: 0.5em;
  background-color: var(--snow);
  border-radius: var(--radius);
`;
