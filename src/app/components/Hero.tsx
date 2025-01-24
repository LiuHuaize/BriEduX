'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                最新发布
              </span>
            </span>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your AI-powered career assistant
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            使用AI技术帮助你打造专业简历，匹配理想工作。为中国大学生提供智能化的求职助手。
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/resume"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              生成简历
            </Link>
            <Link href="/jobs" className="text-sm font-semibold leading-6 text-gray-900">
              寻找工作 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="https://picsum.photos/id/1/800/600"
                  alt="Work environment"
                  width={800}
                  height={600}
                  className="rounded-2xl bg-gray-50 object-cover shadow-lg"
                />
              </div>
              <div className="relative lg:mt-20">
                <Image
                  src="https://picsum.photos/id/2/800/600"
                  alt="Work setup"
                  width={800}
                  height={600}
                  className="rounded-2xl bg-gray-50 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 