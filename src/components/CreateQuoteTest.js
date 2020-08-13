import React from 'react'
import DropdownOption from '../test/DropdownOptionTest'
import DownloadOption from '../test/DownloadOptionTest'
import ImageCreated from '../test/ImageCreatedTest'

export default function CreateQuote() {
  return (
    <div className="create-container">
      <DropdownOption />
      <ImageCreated />
      <DownloadOption />
    </div>
  )
}