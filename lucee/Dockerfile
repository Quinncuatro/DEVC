FROM lucee/lucee5:5.0.1.85

LABEL author="Henry Quinn <Henry_Quinn@ctd.uscourts.gov"
# Based on Jay McConathy's JICS Build

# Documentation on Lucee Dockerfile's is here:
#   https://github.com/lucee/lucee-dockerfiles

# TOMCAT CONFIGS --> OPTIONAL to implement if you need custom Tomcat config.
COPY config/lucee/setenv.sh /usr/local/tomcat/bin/

# copy JDBC driver to lucee web lib folder
COPY config/lucee/jdbc/ /opt/lucee/web/lib/

# copy JSoup .jar to lucee web lib folder
COPY config/lucee/jsoup-1.10.3.jar /opt/lucee/web/lib/

# copy JSoup .jar to lucee web lib folder
COPY config/lucee/jsoup-1.10.3.jar /opt/lucee/lib/

# copy JSoup .jar to lucee web lib folder
COPY config/lucee/jsoup-1.10.3.jar /opt/lucee/tomcat/webapps/ROOT/WEB-INF/lucee/lib/

# Lucee server configs --> OPTIONAL
COPY config/lucee/lucee-web.xml.cfm /opt/lucee/web/

# COPY IN a prepared Lucee server XML file --> OPTIONAL
COPY config/lucee/lucee-server.xml /opt/lucee/server/lucee-server/context/

# Default connection to a local MySql database.
ENV ELI_DSN_DRIVER=MySQL \
ELI_DSN_CLASS=org.gjt.mm.mysql.Driver \
ELI_DSN_CONNECTIONSTRING=jdbc:mysql://eli-db:3306/eli?useUnicode=true&characterEncoding=UTF-8&useLegacyDatetimeCode=true \
ELI_DSN_DATABASENAME=eli \ 
ELI_DSN_USERNAME=root \
ELI_DSN_PASSWORD=123456 \
LUCEE_TIMEZONE=America/New_York

# copy code folder to /var/www
COPY code/ /var/www/