# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
 
  config.vm.box = "ubuntu16.04-20170208"
  config.vm.hostname = "sha-samesame-brandsite"

  
  config.vm.network :forwarded_port, guest: 80, host: 9301
  config.vm.network :forwarded_port, guest: 3306, host: 33041
  config.vm.network :forwarded_port, guest: 6379, host: 63798

  
  config.vm.network :private_network, ip: "192.168.33.10"

  config.vm.synced_folder "./", "/vagrant", :nfs => true 

  config.vm.provider :virtualbox do |vb|
  #   # Don't boot with headless mode
  #   vb.gui = true
  #
  #   # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end
  #

  config.vm.provision :puppet do |puppet|
    puppet.module_path = "puppet/modules"
    puppet.manifests_path = "puppet/manifests"
    puppet.manifest_file  = "site.pp"
  end

end
