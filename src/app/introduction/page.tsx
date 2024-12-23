import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout6 from '@/component/layout/Layout6'
import React from 'react'

const Introduction = () => {
    return (
        <Layout6>
            <BreadcrumbSection title='学联简介' style='tl-breadcrumb-2'/>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2 style={{ marginBottom: '20px' }}>伯明翰大学中国学联简介</h2>
                <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.5' }}>
                    伯明翰大学中国学联是伯明翰大学的一个由中国留学生组成的学生组织，旨在为中国学生提供学术、文化和社交支持。学联致力于促进中英文化交流，增强中国学生与当地社会的互动，同时为成员们提供丰富的活动和资源，帮助他们更好地适应留学生活。
                </p>
            </div>
        </Layout6>
    )
}

export default Introduction;


