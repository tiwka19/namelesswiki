import React from 'react'
import Links from '../constants/index';
export default function DownloadLinks() {
  return (
    <ul>
      {Links?.map(item => (
      <li key={item.id}>
          <a href={`https://sourceforge.net/projects/nameless-aosp/files/lemonadep/${item.link}/download`}>{item.link}</a>
      </li>
    ))} </ul>
  )
}
