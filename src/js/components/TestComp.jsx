import React from 'react'
import { connect } from 'react-redux'

function TestComp({leo}) {
  return <div>Haaaloo {leo}</div>
}

function mapStateToProps(state) {
  return {
    leo: `${state.fables.initial} ${state.fables.testVal}`
  }
}

export default connect(mapStateToProps)(TestComp);
