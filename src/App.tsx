import Typography from 'components/Typography'

function App() {
  return (
    <div className="container my-32 text-center">
      <Typography size="large" weight="medium" className="mb-4">
        Equinox Theme
      </Typography>
      <Typography>
        Run{' '}
        <code className="bg-neutral-ash py-1 px-2 rounded">
          npm run storybook
        </code>{' '}
        to view components
      </Typography>
    </div>
  )
}

export default App
