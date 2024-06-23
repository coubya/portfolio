<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html dir="rtl">
        <head>
            <title>السيرة الذاتية ليعقوب مصبحي</title>
            <link rel="stylesheet" type="text/css" href="style.css"/>
        </head>
        <body>
            <div class="cv">
                <h1>السيرة الذاتية</h1>
                <h1>يعقوب مصبحي</h1>

                <div class="cv-section">
                    <h2>معلومات شخصية</h2>
                    <p><strong>العمر: </strong> <xsl:value-of select="resume/personalInfo/age"/></p>
                    <p><strong>الموقع: </strong> <xsl:value-of select="resume/personalInfo/location"/></p>
                    <p><strong>الرخصة: </strong> <xsl:value-of select="resume/personalInfo/license"/></p>
                </div>

                <div class="cv-section">
                    <h2>التعليم</h2>
                    <xsl:for-each select="resume/education/degree">
                        <div class="degree">
                            <h3><xsl:value-of select="title"/></h3>
                            <p><xsl:value-of select="institution"/>, <xsl:value-of select="location"/></p>
                            <p><xsl:value-of select="year"/></p>
                        </div>
                    </xsl:for-each>
                </div>

                <div class="cv-section">
                    <h2>الخبرات المهنية</h2>
                    <xsl:for-each select="resume/experience/job">
                        <div class="job">
                            <h3><xsl:value-of select="title"/></h3>
                            <p><xsl:value-of select="company"/>, <xsl:value-of select="location"/></p>
                            <p><xsl:value-of select="years"/></p>
                            <ul>
                                <xsl:for-each select="responsibilities/responsibility">
                                    <li><xsl:value-of select="."/></li>
                                </xsl:for-each>
                            </ul>
                        </div>
                    </xsl:for-each>
                </div>

                <div class="cv-section">
                    <h2>الأنشطة اللاصفية</h2>
                    <xsl:for-each select="resume/extraActivities/activity">
                        <div class="activity">
                            <h3><xsl:value-of select="title"/></h3>
                            <p><xsl:value-of select="organization"/>, <xsl:value-of select="location"/></p>
                            <p><xsl:value-of select="years"/></p>
                            <ul>
                                <xsl:for-each select="responsibilities/responsibility">
                                    <li><xsl:value-of select="."/></li>
                                </xsl:for-each>
                            </ul>
                        </div>
                    </xsl:for-each>
                </div>

                <div class="cv-section">
                    <h2>المهارات التقنية</h2>
                    <xsl:for-each select="resume/skills/skill">
                        <div class="skill">
                            <h3><xsl:value-of select="category"/></h3>
                            <ul>
                                <xsl:for-each select="levels/level">
                                    <li><strong><xsl:value-of select="language"/> :</strong> <xsl:value-of select="proficiency"/></li>
                                </xsl:for-each>
                                <xsl:for-each select="items/item">
                                    <li><xsl:value-of select="."/></li>
                                </xsl:for-each>
                            </ul>
                        </div>
                    </xsl:for-each>
                </div>

                <div class="cv-section">
                    <h2>المهارات الشخصية</h2>
                    <xsl:for-each select="resume/personalSkills/skill">
                        <div class="skill">
                            <h3><xsl:value-of select="category"/></h3>
                            <ul>
                                <xsl:for-each select="items/item">
                                    <li><xsl:value-of select="."/></li>
                                </xsl:for-each>
                            </ul>
                        </div>
                    </xsl:for-each>
                </div>

                <div class="cv-section">
                    <h2>اللغات</h2>
                    <ul>
                        <xsl:for-each select="resume/languages/language">
                            <li><strong><xsl:value-of select="name"/> : </strong> <xsl:value-of select="level"/></li>
                        </xsl:for-each>
                    </ul>
                </div>

                <div class="cv-section">
                    <h2>الهوايات</h2>
                    <ul>
                        <xsl:for-each select="resume/interests/interest">
                            <li><xsl:value-of select="."/></li>
                        </xsl:for-each>
                    </ul>
                </div>
            </div>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
