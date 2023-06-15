import Pagination from "react-bootstrap/Pagination";

function Page({ isExpanded, page, setPage, searchFuc }) {
  // const testClick = () => {
  //   setPage({
  //     page: 7,
  //     totalPage: 7
  //   })
  //   searchFuc();
  // }

  return (
      <>
    <Pagination className='justify-content-center'>
      {isExpanded && (
        <>
          {
            page.page > 2 ? (
                  <>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{page.page - 2}</Pagination.Item>
                    <Pagination.Item>{page.page - 1}</Pagination.Item>
                  </>
                ) : ""
          }
          {
            page.page == 2 ? (
                <>
                  <Pagination.Prev />
                  <Pagination.Item>{page.page -1}</Pagination.Item>
                </>
            ): ""
          }
          <Pagination.Item active>{"1"}</Pagination.Item>
          {
            page.totalPage > page.page + 1 ? (
                    <>
                      <Pagination.Item>{page.page + 1}</Pagination.Item>
                      <Pagination.Item>{page.page + 2}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </>
                ) : ""
          }
          {
            page.totalPage <= page.page + 1 && page.totalPage > page.page ? (
                <>
                  <Pagination.Item>{page.page  + 1}</Pagination.Item>
                  <Pagination.Next />
                </>
            ): ""
          }

        </>
      )}
      {!isExpanded && (
        <>
          {page.page > 1 ?
              <>
                <Pagination.Prev />
                <Pagination.Item>{page.page -1}</Pagination.Item>
              </> : ""}

          <Pagination.Item active>{"page.page"}</Pagination.Item>

          {page.totalPage > page.Page ?
              <>
                <Pagination.Item>{page.page  + 1}</Pagination.Item>
                <Pagination.Next />
              </> : ""}
        </>
      )}

    </Pagination>
  {/*<button onClick={testClick}/>*/}
  {/*      test*/}
  </>

  );
}

export default Page;
