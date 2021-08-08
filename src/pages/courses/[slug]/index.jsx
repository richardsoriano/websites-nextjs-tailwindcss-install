import { useRouter } from 'next/router'

import Page from '@/ui/page'
import H1 from '@/ui/headings/h1'

export default function CourseDetailsPage() {
    const router = useRouter()
  return (
      <Page title={router.query.slug}>
        <H1>{router.query.slug}</H1>
      </Page>
  )
}
