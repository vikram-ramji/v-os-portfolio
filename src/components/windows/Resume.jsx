
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = () => {
  return (
    <MacWindow windowType="resume" title="Resume" width={800} height={600}>
      <iframe src="/resume.pdf" frameborder="0" ></iframe>
    </MacWindow>
  )
}

export default Resume