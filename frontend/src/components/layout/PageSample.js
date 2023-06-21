import Pagination from "react-bootstrap/Pagination";

function PageSample({ isExpanded, page, handleChangePage, searchFuc }) {
    const handlePageClick = (changePage) => {
        const newPage = {
            ...page,
            "currentPage": changePage
        }
        handleChangePage(newPage);
    }
    return (
        <>
            <Pagination className='justify-content-center'>
                {isExpanded && (
                    <>
                        {
                            page.currentPage > 2 ? (
                                <>
                                    <Pagination.First onClick={(e) => handlePageClick(1)} />
                                    <Pagination.Prev onClick={(e) => handlePageClick(page.currentPage - 1)} />
                                    <Pagination.Item onClick={(e) => handlePageClick(page.currentPage - 2)} >{page.currentPage - 2}</Pagination.Item>
                                    <Pagination.Item onClick={(e) => handlePageClick(page.currentPage - 1)}>{page.currentPage - 1}</Pagination.Item>
                                </>
                            ) : ""
                        }
                        {
                            page.currentPage == 2 ? (
                                <>
                                    <Pagination.Prev onClick={(e) => handlePageClick(page.currentPage - 1)} />/>
                                    <Pagination.Item onClick={(e) => handlePageClick(page.currentPage - 1)}>{page.currentPage -1}</Pagination.Item>
                                </>
                            ): ""
                        }
                        <Pagination.Item active>{"1"}</Pagination.Item>
                        {
                            page.totalPage > page.currentPage + 1 ? (
                                <>
                                    <Pagination.Item onClick={(e) => handlePageClick(page.currentPage + 1)}>{page.currentPage + 1}</Pagination.Item>
                                    <Pagination.Item onClick={(e) => handlePageClick(page.currentPage + 2)}>{page.currentPage + 2}</Pagination.Item>
                                    <Pagination.Next  onClick={(e) => handlePageClick(page.currentPage + 1)}/>
                                    <Pagination.Last  onClick={(e) => handlePageClick(page.totalPage)}/>
                                </>
                            ) : ""
                        }
                        {
                            page.totalPage <= page.currentPage + 1 && page.totalPage > page.currentPage ? (
                                <>
                                    <Pagination.Item onClick={(e) => handlePageClick(page.currentPage + 1)}>{page.currentPage  + 1}</Pagination.Item>
                                    <Pagination.Next  onClick={(e) => handlePageClick(page.currentPage + 1)}/>
                                </>
                            ): ""
                        }

                    </>
                )}
                {!isExpanded && (
                    <>
                        {page.currentPage > 1 ?
                            <>
                                <Pagination.Prev  onClick={(e) => handlePageClick(page.currentPage - 1)}/>
                                <Pagination.Item  onClick={(e) => handlePageClick(page.currentPage - 1)}>{page.currentPage -1}</Pagination.Item>
                            </> : ""}

                        <Pagination.Item active>{"page.currentPage"}</Pagination.Item>

                        {page.totalPage > page.Page ?
                            <>
                                <Pagination.Item  onClick={(e) => handlePageClick(page.currentPage + 1)}>{page.currentPage  + 1}</Pagination.Item>
                                <Pagination.Next  onClick={(e) => handlePageClick(page.currentPage + 1)}/>
                            </> : ""}
                    </>
                )}

            </Pagination>
            {/*<button onClick={testClick}/>*/}
            {/*      test*/}
        </>

    );
}

export default PageSample;
