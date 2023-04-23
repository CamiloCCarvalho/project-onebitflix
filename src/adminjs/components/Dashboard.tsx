// src/adminjs/components/Dashboard.tsx

import React, { useEffect, useState } from 'react'
import { H1, H2, Table, TableHead, TableBody, TableRow, TableCell } from '@adminjs/design-system'
import { ApiClient, useCurrentAdmin } from 'adminjs'

export default function Dashboard() {
  const [currentAdmin] = useCurrentAdmin()
  const [resources, setResources] = useState<{ [key: string]: number }>()
  const api = new ApiClient()

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    const res = await api.getDashboard()
    setResources(res.data)
  }

  return (
    <section style={{ backgroundColor: '#202020', color:'#f5f5f5', padding: '1.5rem' }}>
      <H1 style={{textAlign: 'center'}}>{currentAdmin?.firstName}</H1>

      <section style={{ backgroundColor: '#202020', color:'#f5f5f5', padding: '1.5rem' }}>
        <H2 style={{textAlign: 'center'}}>Resumo</H2>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#FF0043', textAlign: 'center'}}>
              <TableCell style={{ color: "#FFF", borderRadius: '20px'}}>Recurso</TableCell>
              <TableCell style={{ color: "#FFF", borderRadius: '20px'}}>Registros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {
              resources ?
                Object.entries(resources).map(([resource, count]) => (
                  <TableRow key={resource}>
                    <TableCell style={{ color: "#FF0043", textAlign: 'center' }}>{resource}</TableCell>
                    <TableCell style={{ color: "#FF0043", textAlign: 'center'  }}>{count}</TableCell>
                  </TableRow>
                ))
                :
                <></>
            }
          </TableBody>
        </Table>
      </section>
    </section>
  )
}