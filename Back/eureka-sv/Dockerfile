FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/eureka-sv-0.0.1.jar
COPY ${JAR_FILE} app_eureka-sv.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_eureka-sv.jar"]
