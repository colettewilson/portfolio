import React from "react"
import { Link } from "gatsby"

import styles from "./pagination.module.scss"

const Pagination = (props) => {
  const { currentPage, totalPages, base } = props
  const prevPage = currentPage - 1 <= 1 ? `/${base}` : `/${base}/page/${(currentPage - 1).toString()}`
  const nextPage = currentPage !== undefined && currentPage === totalPages ? `/${base}/page/${(currentPage).toString()}` : `/${base}/page/${(currentPage + 1).toString()}`
  return (
    <nav aria-label="pagination" className={styles.pagination}>
      <ul>
        <li className={currentPage === 1 ? styles.current : ""}>
          <Link to={prevPage} aria-disabled={currentPage === 1}>
            <span>Previous</span>
          </Link>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={`pagination-${base}-${i}`} className={currentPage === i + 1 ? styles.current : ""}>
            <Link key={`pagination-number${i + 1}`} to={i === 0 ? `/${base}` : `/${base}/page/${i + 1}`}>
              <span className={styles.visuallyHidden}>Page</span>
              {i + 1}
            </Link>
          </li>
        ))}
        <li className={currentPage === totalPages ? styles.current : ""}>
          <Link to={nextPage} aria-disabled={currentPage === totalPages}>
            <span>Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
