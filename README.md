# AWS-EC2
##  Introduction 

### this is the link for deployed server using GUI [Amazon web servic](http://firstaws1-env.eba-3qjjnpe7.us-east-1.elasticbeanstalk.com/)

### this is the link for deployed server using command line [CLI deployed server](http://firstaws1-cli.eba-mjpyrkhu.us-west-2.elasticbeanstalk.com/)
* AWS
    * Amazon web service
Amazon Elastic Compute Cloud (Amazon EC2) offers the broadest and deepest compute platform, with over 500 instances and choice of the latest processor, storage, networking, operating system, and purchase model to help you best match the needs of your workload. We are the first major cloud provider that supports Intel, AMD, and Arm processors, the only cloud with on-demand EC2 Mac instances, and the only cloud with 400 Gbps Ethernet networking. We offer the best price performance for machine learning training, as well as the lowest cost per inference instances in the cloud. More SAP, high performance computing (HPC), ML, and Windows workloads run on AWS than any other cloud.

## What we did in this task 

* we prepare simple api server and we have to deployed it to Amazon web service using two wayes 

* first way is using GUI , after creating acount on amazon web service , we have to go to Elastict beanstalk , then from Enviroments , create new application 
* then we will start with the new tamplet , then we deploed this tamplet 
* by that time we zip server file and json fils on zip file 
* then we deplyed it from add file 
as shown below :

![link](./public/Screenshot%20(369).png)

![link](./public/Screenshot%20(368).png)



* second way using command line 
* after installing Amazon web service CLI and Eb CLI 
* We have to create new folder and we have to add the main files to it , then in the terminal **eb init** to make new application 

> note that I got error message that different time between tirminal and application 
and , By Mr shihab help we solved it that we have to write in the termenal **code .aws/** , this command will open config page , We will update access id key and secret key 

* then we continue with command line confirmation as shown 

![link](./public/Screenshot%20(370).png)

* After that we need **create eb file name** , it will take time , we have to wait until it finish 

![link](./public/Screenshot%20(371).png)

* After that we check Amazon web servics , and we find that our app is created as shown , note that we used different region 

![link](./public/Screenshot%20(372).png)

![link](./public/Screenshot%20(373).png)

* Finally we see the server is working , with diferent region and some small modification 

![link](./public/Screenshot%20(374).png)



### WE are Team # 1 ART OF CODING 
* Murad alazzeh 
* Mohammad alhaj
* Heba Alhamaydeh
* sara altayeh
* Yasein burqan





