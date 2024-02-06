import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 8px 10px;
  text-align: center;
  border-radius: 6px;
  margin: 4px;
  border: none;
  font-weight: 600;
`;
function Pagination({ page, onChange }) {
  return (
    <div>
      {[...Array(5)].map((_, pageNumber) => (
        <StyledBtn
          key={pageNumber + 1}
          onClick={() => onChange(pageNumber)}
          style={{
            backgroundColor: page === pageNumber + 1 ? "lightblue" : "pink",
            boxShadow:
              page === pageNumber + 1
                ? "1px 1px 2px rgba(0, 0, 0, 0.15)"
                : "3px 3px 5px rgba(0, 0, 0, 0.15)",
          }}
          disabled={pageNumber + 1 === page}
        >
          {pageNumber + 1}
        </StyledBtn>
      ))}
    </div>
  );
}

export default Pagination;
