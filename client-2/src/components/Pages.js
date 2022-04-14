import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../index";

const Pages = observer(() => {
    // with hook useContext we get device from device store
    const { device } = useContext(Context);
    const pageCount = Math.ceil(device.totalCount / device.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1); // number of the page; Ex. 1,2
    }

    return (
        <Pagination className="mt-5">
            {pages.map(
                (page) => (
                    <Pagination.Item
                        key={page}
                        active={device.page === page}
                        onClick={() => device.setPage(page)}
                    >
                        {page}
                    </Pagination.Item>
                ) // number of a page
            )}
        </Pagination>
    );
});

export default Pages;
