import React from 'react'
import DropdownOption from '../create/DropdownOption'
import DownloadOption from '../create/DownloadOption'
import ImageCreated from '../create/ImageCreated'

export default function CreateQuote() {
  return (
    <div className="create-container">
      <DropdownOption />
      <ImageCreated />
      <DownloadOption />
    </div>
  )
}