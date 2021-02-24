import styled from 'styled-components'

export const EditorFilesBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-right: 10px;
  position: relative;
  flex-direction: column;

  * {
    border-radius: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export const EditorFilesBlockHeader = styled.h2`
  height: 35px;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.textColor};
  border-bottom: 1px solid rgba(255,255,255,0.05);
`