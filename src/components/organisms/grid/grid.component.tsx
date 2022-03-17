import React, { Fragment } from 'react'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import IGlobalTypes from 'utils/global-types'
import { Card, CardBody } from 'components/molecules/card'
import styles from './grid.style'
import { customFilterOperator } from 'utils/constants'

const GridComponent:React.FC<IGlobalTypes.ICustomGrid> = ({ 
  dataGrid, dataStates, 
  style, columns, 
  showTotal = true,
  ...props
}) => {
  const pageSize = dataStates.take > dataGrid.length ? dataGrid.length : dataStates.take
  return (
    <Fragment>
      <Card style={styles.cardGridStyle}>
        <CardBody>
          <Grid
            data={dataGrid.slice(dataStates.skip, dataStates.skip + dataStates.take)}
            scrollable={dataStates.scrollable}
            pageSize={pageSize}
            take={dataStates.take}
            total={dataStates.total}
            skip={dataStates.skip}
            className='no-scrollbar'
            style={style}
            sortable={dataStates.sortable}
            filterable={dataStates.filterable}
            reorderable={dataStates.reorderable}
            filter={dataStates.filter}
            sort={dataStates.sort}
            filterOperators={customFilterOperator}
            {...props}
          >
            {columns.filter(x => x.show).map((column, index) => (
              <Column
                key={index}
                {...column}
              />
            ))}
          </Grid>
          {showTotal && (
            <div style={styles.footerStyle}>
              {`Total Records: ${dataStates.total}`}
            </div>
          )}
        </CardBody>
      </Card>
    </Fragment>
  )
}
export default GridComponent