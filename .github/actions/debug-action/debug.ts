import * as core from '@actions/core'

const run = async (): Promise<void> => {
  const creature = process.env['INPUT_AMAZING-CREATURE']
  core.debug(`👋 Hello! You are an amazing ${creature}! 🙌`)
}

run()

export default run
