class PicturesController < ApplicationController
    def new
        @picture = Picture.new
        @annotations = @picture.annotations
    end
    
    def edit 
        @picture = Picture.find(params[:format])
        
    end

    def preview
        # byebug
        @picture = Picture.find(params[:id])
        respond_to do |format|
            format.js { render partial: 'pictures/preview' }
        end
    end

    def show 
        @pictures  = Picture.paginate(:page => params[:page], :per_page=>6)
    end

    def destroy
        @picture = Picture.find(params[:format])
        @picture.destroy
        flash[:notice] = "Your image is successfully deleted"
        redirect_to @picture
    end

    def annotations
        @picture = Picture.find(params[:id])
        @annotations = @picture.annotations
        respond_to do |format|
            format.js { render partial: 'pictures/annotations' }
        end
    end

    def next_image
        # byebug
        @picture = Picture.find(params[:id])
        
        unless @picture.next 
            @picture = Picture.first 
        else
            @picture = @picture.next
        end
        
        respond_to do |format|
            format.js { render partial: 'pictures/next' }
        end
    end

    def prev_image
        # byebug
        @picture = Picture.find(params[:id])
        
        unless @picture.prev 
            @picture = Picture.last
        else
            @picture = @picture.prev
        end
        
        respond_to do |format|
            format.js { render partial: 'pictures/next' }
        end
    end

    def update
        # byebug
        @picture = Picture.find(params[:id])
        
        #annotation update
        index = 1
        while index < params[:picture][:key].length
            unless Annotation.find_by(key: "#{params[:picture][:key][index]}", value: "#{params[:picture][:value][index]}", picture_id: "#{params[:id]}")
                Annotation.create(key: "#{params[:picture][:key][index]}", value: "#{params[:picture][:value][index]}", picture_id: "#{params[:id]}") 
            end
            index = index + 1
        end
        @annotations = @picture.annotations
        @annotations.each{ |annotation|
            annotation.destroy unless params[:picture][:value].include?(annotation.value)
        }

        #picture update
        if params[:picture][:picture]
            @picture.picture = params[:picture][:picture] 
            @picture.save
        end
        flash[:notice] = "Image was successfully updated"
        redirect_to pictures_path
    end
    

    def create
        # byebug
        @picture = Picture.new(picture_params)
        if @picture.save
            keys = []
            values = []
            params.each{ |key,value|
                keys.push(value) if key.include? "key"
                values.push(value) if key.include? "value"
            }
            index = 0
            while index < keys.length 
                Annotation.create(key: keys[index], value: values[index],picture_id: @picture.id)
                index = index + 1
            end
            flash[:notice] = "Image was successfully added"
            redirect_to root_path 
        else
            flash.now[:alert] = "Please upload a valid image format"
            render :new 
        end
        
    end

    

    private
    def picture_params
        params.require(:picture).permit(:picture)
    end
end