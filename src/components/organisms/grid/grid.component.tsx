import React, { Fragment } from 'react'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import IGlobalTypes from 'utils/global-types'
import { Card, CardBody } from 'components/molecules/card'
import styles from './grid.style'

const GridComponent:React.FC<IGlobalTypes.ICustomGrid> = ({ dataGrid, dataStates, style, columns, ...props }) => {
  return (
    <Fragment>
      <Card style={styles.cardGridStyle}>
        <CardBody>
          <Grid
            data={dataGrid.slice(dataStates.skip, dataStates.skip + dataStates.take)}
            scrollable={dataStates.scrollable}
            pageSize={dataStates.take}
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
            {...props}
          >
            {columns.filter(x => x.show).map((column, index) => (
              <Column
                key={index}
                {...column}
              />
            ))}
          </Grid>
          <div style={styles.footerStyle}>
            {`Total Records: ${dataStates.total}`}
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}
export default GridComponent