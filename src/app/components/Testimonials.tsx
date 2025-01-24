'use client'

import { Testimonials as TestimonialsUI } from "@/components/ui/testimonials"

const testimonials = [
  {
    image: 'https://api.dicebear.com/7.x/micah/png?seed=张同学',
    text: '使用AI助手帮我生成的简历非常专业，成功获得了理想的工作offer。整个求职过程变得轻松很多！',
    name: '张同学',
    username: '应届毕业生'
  },
  {
    image: 'https://api.dicebear.com/7.x/micah/png?seed=李同学',
    text: '职位匹配功能帮我找到了最适合我的工作机会，推荐的岗位都很符合我的期望。非常感谢这个平台！',
    name: '李同学',
    username: '研究生'
  },
  {
    image: 'https://api.dicebear.com/7.x/micah/png?seed=王同学',
    text: 'AI简历助手的提问很专业，帮助我挖掘了很多亮点。找工作不再那么困难了。',
    name: '王同学',
    username: '本科生'
  },
  {
    image: 'https://api.dicebear.com/7.x/micah/png?seed=刘同学',
    text: '这个平台的AI技术真的很强大，能够精准理解我的需求，给出的建议都很实用。',
    name: '刘同学',
    username: '应届生'
  },
  {
    image: 'https://api.dicebear.com/7.x/micah/png?seed=陈同学',
    text: '简历模板很专业，AI的优化建议也很到位，帮我提升了很多简历的质量。',
    name: '陈同学',
    username: '研究生'
  },
  {
    image: 'https://api.dicebear.com/7.x/micah/png?seed=赵同学',
    text: '找工作最困难的就是不知道自己适合什么岗位，这个平台帮我解决了这个问题。',
    name: '赵同学',
    username: '本科生'
  }
]

export default function Testimonials() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1200px]">
        <TestimonialsUI testimonials={testimonials} />
      </div>
    </div>
  )
} 