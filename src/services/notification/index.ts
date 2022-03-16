import { gql } from '@apollo/client'
const GET_NOTIFICATION = gql`
query getNotifmasterdata($skip: Int, $first: Int) {
  sap_notification_headers(
      orderBy: id_DESC, skip: $skip, first: $first, 
      where: {created_date_not: "1990-01-01T06:27:47"}  
    ) {
    id
    maintenance_plant
    location
    funloc
    desc_of_funloc
    notification
    order
    short_text
    notification_type
    planning_indicator
    system_status
    user_status
    priority
    planner_group
    pm_activity_type
    reported_by
    person_responsible
    name_of_person_responsible
    breakdown_indicator
    start_of_malfunction_date
    start_of_malfunction_time
    end_of_malfunction_date
    end_of_malfunction_time
    breakdown_duration
    notification_item_short_text
    cause_text
    code_group_object_part
    part_of_object
    short_text_object
    code_group_problem
    problem
    short_text_for_problem
    code_group_cause
    cause_code
    short_text_for_cause_code
    sap_created_by
    sap_created_on
    sap_modified_by
    sap_modified_on
    __typename
  }
}

`
const COUNT_NOTIFICATION = gql`
query NotifmasterCount {
  sap_notification_headersConnection(where: {created_date_not: "1990-01-01T01:39:03"}) {
    aggregate {
      count
      __typename
    }
    __typename
  }
}

`
export default {
  GET_NOTIFICATION,
  COUNT_NOTIFICATION  
}