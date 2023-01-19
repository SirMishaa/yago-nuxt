import type { Config } from 'tailwindcss'

const rootDirectory = process.cwd()

export default <Partial<Config>>{
    content: [
        `${rootDirectory}/components/**/*.{vue,js,ts}`,
        `${rootDirectory}/layouts/**/*.vue`,
        `${rootDirectory}/pages/**/*.vue`,
        `${rootDirectory}/composables/**/*.{js,ts}`,
        `${rootDirectory}/plugins/**/*.{js,ts}`,
        `${rootDirectory}/App.{js,ts,vue}`,
        `${rootDirectory}/app.{js,ts,vue}`,
        `${rootDirectory}/Error.{js,ts,vue}`,
        `${rootDirectory}/error.{js,ts,vue}`
    ]
}
