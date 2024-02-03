import Link from 'next/link'
import React, { memo } from 'react'
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai'
import { RiTimer2Line } from 'react-icons/ri'

import { getLocaleDate } from 'utils/get-locale-date'
import { getReadingTime } from 'utils/getTimeReading'
import { Attributes } from '../ts'
import * as CSS from './styles'

interface ArticleHeaderData {
  article: Attributes
}

const ArticleHeader: React.FC<ArticleHeaderData> = (props) => {
  const { readTime } = getReadingTime(props.article?.attributes?.content)
  const { localeDate: publishedAt } = getLocaleDate(
    props.article?.attributes?.publishedAt,
    'pt-BR',
  )

  return (
    <CSS.ArticleHeader>
      <div>
        <CSS.InfoHeader>
          <Link href='/blog'>
            <CSS.BackToOverview type='button' aria-label='Back to overview'>
              <AiOutlineArrowLeft size={19} aria-hidden='true' />
              <p>Back to overview</p>
            </CSS.BackToOverview>
          </Link>
          <div>
            <CSS.DateTimeRead>
              <AiOutlineCalendar size={17} />
              {publishedAt}
              &nbsp;|&nbsp;
              <RiTimer2Line size={17} />
              {readTime}
            </CSS.DateTimeRead>
          </div>
        </CSS.InfoHeader>
      </div>

      <CSS.ArticleTitle>{props.article?.attributes?.title}</CSS.ArticleTitle>
      <CSS.ArticleDescription>
        {props.article?.attributes?.description}
      </CSS.ArticleDescription>
    </CSS.ArticleHeader>
  )
}

export default memo(ArticleHeader)
